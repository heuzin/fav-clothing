import { RouteComponentProps } from 'react-router';

export interface IMenuItemProps extends RouteComponentProps {
    title: string;
    imageUrl: string;
    linkUrl: string;
    size?: string;
}
