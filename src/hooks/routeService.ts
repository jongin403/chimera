import router from 'next/router';

export type routerProps = {
  pageName: string;
};

export const moveTo = ({ pageName }: routerProps) => {
  router.push(pageName);
};
