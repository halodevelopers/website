import styles from './css/svg.module.css';
import clsx from 'clsx';

const Light = () => {
    return (
        <svg class={clsx("svg", styles.light)} viewBox="0 0 24 24" fill="none">
            <path d="M8.875 20.125H15.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 17.625V13.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M9.5 10.75L12 13.25L14.5 10.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8.14873 15.0477C7.40556 14.4673 6.80363 13.726 6.38818 12.8794C5.97273 12.0329 5.75457 11.1032 5.7501 10.1602C5.73138 6.77257 8.4625 3.95646 11.8493 3.87675C13.1617 3.84515 14.4507 4.22758 15.5335 4.96981C16.6164 5.71203 17.438 6.77635 17.8819 8.01181C18.3257 9.24726 18.3694 10.5911 18.0065 11.8527C17.6437 13.1144 16.8928 14.2297 15.8604 15.0406C15.633 15.2168 15.4486 15.4424 15.3212 15.7003C15.1938 15.9582 15.1267 16.2417 15.125 16.5293L15.125 17C15.125 17.1657 15.0592 17.3247 14.9419 17.4419C14.8247 17.5591 14.6658 17.625 14.5 17.625H9.49999C9.33423 17.625 9.17526 17.5591 9.05805 17.4419C8.94084 17.3247 8.87499 17.1657 8.87499 17L8.87498 16.5288C8.87427 16.243 8.80851 15.9611 8.68268 15.7045C8.55685 15.4479 8.37425 15.2233 8.14873 15.0477V15.0477Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    );
};

export default Light;