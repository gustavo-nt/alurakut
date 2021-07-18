import nookies from 'nookies';

export default function LogoutPage() {
  return <div></div>;
};

export const getServerSideProps = async ctx => {
  nookies.destroy(ctx, 'USER_TOKEN');

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};