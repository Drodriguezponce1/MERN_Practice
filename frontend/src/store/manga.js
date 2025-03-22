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


}));