import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
 
export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <h1>{t('product')}</h1>
      <h2>{t('move')}</h2>
    </div>
  );
}