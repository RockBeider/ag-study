import React from 'react';
import classNames from 'classnames';

export const List = ({ children, flush = false, className, ...props }) => {
    return (
        <ul className={classNames('list', { 'list-flush': flush }, className)} {...props}>
            {children}
        </ul>
    );
};

export const ListItem = ({ icon, children, action, className, ...props }) => {
    return (
        <li className={classNames('list-item', className)} {...props}>
            <div className="list-item-content">
                {icon && <span className="list-item-icon">{icon}</span>}
                <div className="list-item-text">{children}</div>
            </div>
            {action && <div className="list-item-action">{action}</div>}
        </li>
    );
};
