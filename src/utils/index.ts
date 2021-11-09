import { useMemo } from 'react';

export function getTouchedError(form: any, name: string) {
    if (form.touched[name] && form.errors[name]) {
        return form.errors[name];
    }

    return '';
}

export function useTouchedError(form: any, name: string) {
    let touchedError = useMemo(() => getTouchedError(form, name), [form, name]);

    return {
        touchedError,
    };
}