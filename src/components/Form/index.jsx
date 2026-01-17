import React from 'react';
import classNames from 'classnames';

// We can just export these as named exports from a single file for simplicity in this demo,
// or separate files. Given the scale, separate files are cleaner but I'll put them here for speed
// and then verify. Actually, user asked for "components", so separate files in a folder is better practice.
// I will create individual files in the next steps. For now, this tool call writes the Button.

export const Button = ({ variant = 'primary', className, children, ...props }) => {
    return (
        <button
            className={classNames('btn', `btn-${variant}`, className)}
            {...props}
        >
            {children}
        </button>
    );
};

export const Input = ({ className, ...props }) => {
    return (
        <input
            className={classNames('input-base', className)}
            {...props}
        />
    );
};

export const Select = ({ className, children, ...props }) => {
    return (
        <select
            className={classNames('input-base', className)}
            {...props}
        >
            {children}
        </select>
    );
};

export const Checkbox = ({ label, className, ...props }) => {
    return (
        <label className={classNames('checkbox-wrapper', className)}>
            <input type="checkbox" className="checkbox-input" {...props} />
            {label && <span className="text-body-small">{label}</span>}
        </label>
    );
};
