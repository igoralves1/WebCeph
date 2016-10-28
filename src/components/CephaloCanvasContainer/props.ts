export interface StateProps {
  hasImage: boolean;
};

export interface DispatchProps {
  onResize(width: number, height: number): any;
};

export type ConnectableProps = StateProps & DispatchProps;

export interface OwnProps {

};

export type Props = ConnectableProps & OwnProps;

export default Props;