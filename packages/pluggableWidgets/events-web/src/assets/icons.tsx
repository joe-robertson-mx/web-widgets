import { ReactElement, createElement } from "react";
export function EventsIcon({ isActive }: { isActive?: boolean }): ReactElement {
    return (
        <span className="widget-events-icon-container">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29619 1.11684C5.3703 0.968626 5.52179 0.875 5.6875 0.875H10.0625C10.2141 0.875 10.3549 0.95351 10.4347 1.08249C10.5144 1.21147 10.5216 1.37254 10.4538 1.50816L9.02039 4.375H10.9375C11.1098 4.375 11.266 4.47611 11.3366 4.63328C11.4072 4.79044 11.379 4.97439 11.2645 5.10316L4.26449 12.9782C4.12649 13.1334 3.89835 13.1702 3.71852 13.0663C3.5387 12.9623 3.45677 12.7462 3.52245 12.5492L5.0805 7.875H2.625C2.47337 7.875 2.33256 7.79649 2.25284 7.66751C2.17313 7.53853 2.16588 7.37746 2.23369 7.24184L5.29619 1.11684Z"
                    fill={isActive ? "#264AE5" : "#6B707B"}
                />
            </svg>
        </span>
    );
}
