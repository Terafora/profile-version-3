import React from 'react';

export default function Wave() {
    return (
        <svg width="0" height="0">
            <defs>
                <clipPath id="wave" clipPathUnits="objectBoundingBox">
                    <path d="M0,0.5 C0.25,0.75 0.75,0.25 1,0.5 L1,1 L0,1 Z" />
                </clipPath>
            </defs>
        </svg>
    );
}
