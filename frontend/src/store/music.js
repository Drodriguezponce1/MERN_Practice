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

    set((state) => ({music: [...state.music, data]}));

    return {success: true, message: "Music resource created"};
    
  }
}));