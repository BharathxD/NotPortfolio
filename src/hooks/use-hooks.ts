import { useState } from "react";

/**
 * The type of the copied value, which can be a string or null.
 */
type CopiedValue = string | null;
/**
 * The type of the copy function, which takes a string and returns a Promise that resolves to a boolean.
 */
type CopyFn = (text: string) => Promise<boolean>;

/**
 * A React hook that provides a function to copy text to the clipboard and keeps track of the last copied text.
 * @returns {[CopiedValue, CopyFn]} An array containing two elements: the last copied text and the copy function.
 */
const useCopyToClipboard = (): [CopiedValue, CopyFn] => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  /**
   * Copies the provided text to the clipboard.
   * @param {string} text - The text to copy to the clipboard.
   * @returns {Promise<boolean>} A promise that resolves to true if the copy was successful and false otherwise.
   */
  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
};

export default useCopyToClipboard;
