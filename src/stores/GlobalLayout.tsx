import create from 'zustand';

type GlobalLayoutState = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

export const useGlobalLayoutStore = create<GlobalLayoutState>((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
