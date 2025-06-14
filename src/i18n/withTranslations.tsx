import { ComponentType, useEffect, useState } from 'react';
import { useI18n } from './utils';

export function withTranslations<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return function WithTranslationsComponent(props: P) {
    const { t } = useI18n();
    const [translations, setTranslations] = useState<Record<string, any>>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const loadTranslations = async () => {
        try {
          const result = await t('Menu.home');
          setTranslations(result);
          setIsLoading(false);
        } catch (error) {
          console.error('Error loading translations:', error);
        }
      };

      loadTranslations();
    }, [t]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} t={t} />;
  };
} 