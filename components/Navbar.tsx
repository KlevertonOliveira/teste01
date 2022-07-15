import { useTranslation } from 'next-i18next';

function Navbar() {
  const { t } = useTranslation();

  return (
    <p>{t('welcome')}</p>
  )
}
export default Navbar