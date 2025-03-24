import {create} from 'zustand';

export const useMangaStore = create((set) => ({
    manga: [],
    setManga: (manga) => set({manga}),
    createManga: async (newManga) => {
        if(!newManga.name || !newManga.publisher || !newManga.genre || !newManga.year || !newManga.pages || !newManga.price || !newManga.image || !newManga.author) {
            return {sucess:false, message: "all fields need to be filled"};
        }
    
        const res = await fetch("/api/manga",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newManga),
        });
    
        const data = await res.json();
    
        set((state) => ({manga: [...state.manga, data.data]}));
    
        return {success: true, message: "Manga resource created"};
        
      },
      fetchManga: async () => {
        const res = await fetch("/api/manga");
        const data = await res.json();
        set({manga: data.data});
      },
      deleteManga: async (id) => {
        const res = await fetch(`/api/manga/${id}`, {
            method: "DELETE",
        });
    
        const data = await res.json();
    
        if(!data.success) {
            return {success: false, message: data.message};
        }
    
        set(state => ({manga: state.manga.filter((manga) => manga._id !== id)}));
    
        return {success: true, message: data.message};
      },
      updateManga: async (id, updatedManga) => {
        const res = await fetch(`/api/manga/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedManga),
        });
    
        const data = await res.json();
    
        if(!data.success) {
            return {success: false, message: data.message};
        }
    
        set(state => ({
          manga: state.manga.map(manga => manga._id === id ? data.data : manga)
        }));
    
        return {success: true, message: `Successfully changed ${data.data.name} resource`};
      }
      


}));