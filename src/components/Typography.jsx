import React from 'react';
import PropTypes from 'prop-types';
import styles from './Typography.module.scss';
import classNames from 'classnames'; // Note: User might not have classnames installed, I should check or just use template literal. 
// I'll use template literal to avoid extra dependency if not requested, but classnames is standard. 
// I'll simple string concatenation for now as it is simple.

const variantMapping = {
    'title-hero': 'h1',
    'title-page': 'h2',
    'subtitle': 'h3',
    'heading': 'h4',
    'body-base': 'p',
    'body-strong': 'p',
    'body-small': 'span',
};

const Typography = ({ variant, children, className, as, ...props }) => {
    const Component = as || variantMapping[variant] || 'p';

    return (
        <Component
            className={`${styles.typography} ${styles[`variant-${variant}`]} ${className || ''}`}
            {...props}
        >
            {children}
        </Component>
    );
};

Typography.propTypes = {
    variant: PropTypes.oneOf([
        'title-hero',
        'title-page',
        'subtitle',
        'heading',
        'body-base',
        'body-strong',
        'body-small',
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    as: PropTypes.elementType,
};

Typography.defaultProps = {
    variant: 'body-base',
    className: '',
};

export default Typography;
