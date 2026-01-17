import React from 'react';
import PropTypes from 'prop-types';

/**
 * Stack Component
 * A flexible container for arranging children in rows or columns.
 */
const Stack = ({
    children,
    direction = 'column',
    gap = '1rem',
    align = 'stretch',
    justify = 'flex-start',
    padding,
    wrap = false,
    className = '',
    style = {},
    ...props
}) => {
    const styles = {
        display: 'flex',
        flexDirection: direction,
        gap: gap,
        alignItems: align,
        justifyContent: justify,
        padding: padding,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...style,
    };

    return (
        <div style={styles} className={className} {...props}>
            {children}
        </div>
    );
};

Stack.propTypes = {
    children: PropTypes.node,
    direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
    gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    align: PropTypes.string,
    justify: PropTypes.string,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    wrap: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Stack;
