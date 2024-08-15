const LOCAL_STORAGE_KEY = 'userToken'

export const useGetUserToken = () => {
    const getToken = (): string | undefined => {
        return localStorage.getItem(LOCAL_STORAGE_KEY) || undefined;
    }

    const setToken = (token: string) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, token);
    }

    return { getToken, setToken };
}