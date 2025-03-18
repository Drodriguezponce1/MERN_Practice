import {create} from 'zustand';

export const useMusicStore = create((set) => ({
  music: [],
  setMusic: (music) => set({music}),
  createMusic: async (newMusic) => {
    if(!newMusic.name || !newMusic.artist || !newMusic.genre || !newMusic.year || !newMusic.price || !newMusic.format || !newMusic.image) {
        return {success: false, message: "all fields need to be filled"};
    }

    const res = await fetch("/api/music",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMusic),
    });

    const data = await res.json();

    set((state) => ({music: [...state.music, data.data]}));

    return {success: true, message: "Music resource created"};
    
  },
  fetchMusic: async () => {
    const res = await fetch("/api/music");
    const data = await res.json();
    set({music: data.data});
  },
  deleteMusic: async (id) => {
    const res = await fetch(`/api/music/${id}`, {
        method: "DELETE",
    });

    const data = await res.json();

    if(!data.success) {
        return {success: false, message: data.message};
    }

    set(state => ({music: state.music.filter((music) => music._id !== id)}));

    return {success: true, message: data.message};
  },
  updateMusic: async (id, updatedMusic) => {
    const res = await fetch(`/api/music/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMusic),
    });

    const data = await res.json();

    if(!data.success) {
        return {success: false, message: data.message};
    }

    set(state => ({
      music: state.music.map(music => music._id === id ? data.data : music)
    }));

    return {success: true, message: `Successfully changed ${data.data.name} resource`};
  }
}));