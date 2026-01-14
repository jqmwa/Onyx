import { forwardRef, HTMLAttributes, useState } from 'react';
import { cn } from '../../utils/classnames';
import './Calendar.css';

export type CalendarTheme = 'light' | 'dark';

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual theme */
  theme?: CalendarTheme;
  /** RTL direction */
  rtl?: boolean;
  /** Selected date */
  selectedDate?: Date;
  /** Date change handler */
  onDateChange?: (date: Date) => void;
  /** Additional CSS class */
  className?: string;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const WEEKDAYS_RTL = ['Sa', 'Fr', 'Th', 'We', 'Tu', 'Mo', 'Su'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/**
 * Calendar Component
 * 
 * A date picker calendar.
 * Themes: Light, Dark
 * Supports RTL
 */
export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ theme = 'light', rtl = false, selectedDate, onDateChange, className, ...props }, ref) => {
    const [viewDate, setViewDate] = useState(selectedDate ?? new Date());
    
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const days: (number | null)[] = [];
    
    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(null);
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    const weekdays = rtl ? WEEKDAYS_RTL : WEEKDAYS;
    
    const handlePrevMonth = () => {
      setViewDate(new Date(year, month - 1, 1));
    };
    
    const handleNextMonth = () => {
      setViewDate(new Date(year, month + 1, 1));
    };
    
    const handleDateClick = (day: number) => {
      const newDate = new Date(year, month, day);
      onDateChange?.(newDate);
    };
    
    const isSelected = (day: number) => {
      if (!selectedDate) return false;
      return (
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year
      );
    };
    
    const isToday = (day: number) => {
      const today = new Date();
      return (
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          'onyx-calendar',
          `onyx-calendar--${theme}`,
          rtl && 'onyx-calendar--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        <div className="onyx-calendar__header">
          <button
            type="button"
            className="onyx-calendar__nav-btn"
            onClick={rtl ? handleNextMonth : handlePrevMonth}
            aria-label="Previous month"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          
          <span className="onyx-calendar__title">
            {MONTHS[month]} {year}
          </span>
          
          <button
            type="button"
            className="onyx-calendar__nav-btn"
            onClick={rtl ? handlePrevMonth : handleNextMonth}
            aria-label="Next month"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        
        <div className="onyx-calendar__weekdays">
          {weekdays.map((day) => (
            <span key={day} className="onyx-calendar__weekday">{day}</span>
          ))}
        </div>
        
        <div className="onyx-calendar__days">
          {days.map((day, index) => (
            <button
              key={index}
              type="button"
              className={cn(
                'onyx-calendar__day',
                day === null && 'onyx-calendar__day--empty',
                day !== null && isSelected(day) && 'onyx-calendar__day--selected',
                day !== null && isToday(day) && 'onyx-calendar__day--today'
              )}
              onClick={() => day !== null && handleDateClick(day)}
              disabled={day === null}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

Calendar.displayName = 'Calendar';

export default Calendar;
