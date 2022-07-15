import type { NextPage } from 'next';
import { i18n, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {

  const { t } = useTranslation();

  function changeLanguage() {
    const currentLanguage = i18n?.language;
    i18n?.changeLanguage(currentLanguage === 'pt' ? 'en' : 'pt');
  }

  return (
    <div>
      <Navbar />
      <button onClick={changeLanguage}>Change language</button>
    </div>
  )
}

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home