import styles from './css/svg.module.css';
import clsx from 'clsx';

const Dice = () => {
    return (
        <svg class={clsx("svg", styles.dic)} viewBox="0 0 24 24" fill="none">
            <path d="M7.625 9.8125H4.5C4.15482 9.8125 3.875 10.0923 3.875 10.4375V13.5625C3.875 13.9077 4.15482 14.1875 4.5 14.1875H7.625C7.97018 14.1875 8.25 13.9077 8.25 13.5625V10.4375C8.25 10.0923 7.97018 9.8125 7.625 9.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M18.875 5.125H15.125C14.7798 5.125 14.5 5.40482 14.5 5.75V9.5C14.5 9.84518 14.7798 10.125 15.125 10.125H18.875C19.2202 10.125 19.5 9.84518 19.5 9.5V5.75C19.5 5.40482 19.2202 5.125 18.875 5.125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M18.875 13.875H15.125C14.7798 13.875 14.5 14.1548 14.5 14.5V18.25C14.5 18.5952 14.7798 18.875 15.125 18.875H18.875C19.2202 18.875 19.5 18.5952 19.5 18.25V14.5C19.5 14.1548 19.2202 13.875 18.875 13.875Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8.25 12H11.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 16.375H13.25C12.7527 16.375 12.2758 16.1775 11.9242 15.8258C11.5725 15.4742 11.375 14.9973 11.375 14.5V9.5C11.375 9.00272 11.5725 8.52581 11.9242 8.17417C12.2758 7.82254 12.7527 7.625 13.25 7.625H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    );
};

export default Dice;