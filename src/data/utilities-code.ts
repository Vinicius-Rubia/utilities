const copyTextToClipboardCode = `
const copyTextToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
}
`;

const useLocalStorageCode = `
import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
`;

const useDebounceCode = `
import { useState, useEffect } from 'react';

function useDebounce<T>(delay: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
`;

const usePreviousCode = `
import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
`;

const useToggle = `
import { useState } from 'react';

function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggleValue];
}

export default useToggle;
`;

const usePagination = `
import { useState } from 'react';

interface Pagination {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

function usePagination(totalPages: number): Pagination {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
  };
}

export default usePagination;
`;

export const UTILITIES_CODE = {
  copyTextToClipboardCode,
  useLocalStorageCode,
  useDebounceCode,
  usePreviousCode,
  useToggle,
  usePagination
}