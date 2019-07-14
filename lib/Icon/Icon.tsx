import React, {SVGAttributes} from 'react';
import './importAll';
import './icon.scss';
import { cn } from '../util/util'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}


const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className,name, ...restprops} = props;
    return (
        <svg className={cn('lufei-icon',className)} {...restprops}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    );
};
export default Icon;