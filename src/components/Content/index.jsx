import React from 'react';
import classNames from 'classnames';

export const Callout = ({
    variant = 'neutral',
    title,
    icon,
    children,
    className,
    ...props
}) => {
    return (
        <div className={classNames('callout', `callout-${variant}`, className)} {...props}>
            {title && (
                <div className="callout-title">
                    {icon && <span className="callout-icon">{icon}</span>}
                    {title}
                </div>
            )}
            <div className="callout-content">
                {children}
            </div>
        </div>
    );
};

export const TextDivider = ({ children, className, ...props }) => {
    return (
        <div className={classNames('text-divider', className)} {...props}>
            {children}
        </div>
    );
};
