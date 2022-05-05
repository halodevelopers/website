import styles from './css/svg.module.css';
import clsx from 'clsx';

const Trophy = () => {
    return (
        <svg class={clsx("svg", styles.tropy)} viewBox="0 0 24 24" fill="none">
            <path d="M6.375 6.375V10.6794C6.375 13.781 8.85583 16.3518 11.9573 16.3748C12.6996 16.3805 13.4356 16.2391 14.123 15.959C14.8104 15.6788 15.4355 15.2654 15.9624 14.7425C16.4892 14.2197 16.9074 13.5977 17.1927 12.9124C17.4781 12.2272 17.625 11.4923 17.625 10.75V6.375C17.625 6.20924 17.5592 6.05027 17.4419 5.93306C17.3247 5.81585 17.1658 5.75 17 5.75H7C6.83424 5.75 6.67527 5.81585 6.55806 5.93306C6.44085 6.05027 6.375 6.20924 6.375 6.375Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M9.5 19.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16.375V19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M17.4856 12H18.25C18.913 12 19.5489 11.7366 20.0178 11.2678C20.4866 10.7989 20.75 10.163 20.75 9.5V8.25C20.75 8.08424 20.6842 7.92527 20.5669 7.80806C20.4497 7.69085 20.2908 7.625 20.125 7.625H17.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M6.52836 12H5.73999C5.07695 12 4.44106 11.7366 3.97222 11.2678C3.50338 10.7989 3.23999 10.163 3.23999 9.5V8.25C3.23999 8.08424 3.30584 7.92527 3.42305 7.80806C3.54026 7.69085 3.69923 7.625 3.86499 7.625H6.36499" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    );
};

export default Trophy;