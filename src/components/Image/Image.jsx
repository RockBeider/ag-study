import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = ({
    src,
    alt,
    ratio = 'natural',
    className,
    ...props
}) => {
    return (
        <div
            className={classNames(
                styles.imageWrapper,
                styles[`ratio-${ratio.replace(':', '-')}`],
                className
            )}
            {...props}
        >
            <img src={src} alt={alt || ''} />
        </div>
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    ratio: PropTypes.oneOf(['1:1', '16:9', '4:3', 'fill', 'natural']),
    className: PropTypes.string,
};

Image.defaultProps = {
    ratio: 'natural',
};

export default Image;
