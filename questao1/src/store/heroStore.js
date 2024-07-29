import create from 'zustand';

const useHeroStore = create(set => ({
  heroes: [],
  filteredHeroes: [],
  fetchHeroes: async () => {
    try {
      const response = await fetch('/api/ps/metahumans'); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Dados dos heróis:', data); 
      set({ heroes: data, filteredHeroes: data });
    } catch (error) {
      console.error("Failed to fetch heroes:", error);
    }
  },
  setFilteredHeroes: (filteredHeroes) => set({ filteredHeroes }),
}));

export default useHeroStore;