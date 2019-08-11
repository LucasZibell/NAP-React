import { t } from 'i18next';

export const required = value => (value ? undefined : t('validate_error:REQUIRED'));
