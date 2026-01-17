import React from 'react';
import classNames from 'classnames';

export const Badge = ({ variant = 'neutral', children, className, ...props }) => {
    return (
        <span className={classNames('badge', `badge-${variant}`, className)} {...props}>
            {children}
        </span>
    );
};

export const Tag = ({ children, onClose, className, ...props }) => {
    return (
        <span className={classNames('tag', className)} {...props}>
            {children}
            {onClose && (
                <span
                    className="tag-close"
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    role="button"
                    aria-label="Remove tag"
                >
                    &times;
                </span>
            )}
        </span>
    );
};
