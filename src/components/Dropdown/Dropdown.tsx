import { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/classnames';
import './Dropdown.css';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  /** Options list */
  options: DropdownOption[];
  /** Selected value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** RTL direction */
  rtl?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Dropdown Component
 * 
 * A select dropdown for choosing from options.
 * States: Closed, Open, Disabled
 * Supports RTL
 */
export const Dropdown = (
  { options, value, placeholder = 'Select Option', disabled = false, rtl = false, onChange, className }: DropdownProps
) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggle = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    const handleSelect = (optionValue: string) => {
      onChange?.(optionValue);
      setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleToggle();
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    return (
      <div
        ref={dropdownRef}
        className={cn(
          'onyx-dropdown',
          isOpen && 'onyx-dropdown--open',
          disabled && 'onyx-dropdown--disabled',
          rtl && 'onyx-dropdown--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
      >
        <button
          type="button"
          className="onyx-dropdown__trigger"
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="onyx-dropdown__value">
            {selectedOption?.label ?? placeholder}
          </span>
          <span className="onyx-dropdown__icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <ul className="onyx-dropdown__menu" role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                className={cn(
                  'onyx-dropdown__item',
                  option.value === value && 'onyx-dropdown__item--selected'
                )}
                role="option"
                aria-selected={option.value === value}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default Dropdown;
