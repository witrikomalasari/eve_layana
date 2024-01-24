import {BaseNavigatorProp} from '@navigators/NavigatorParamList';
import {useNavigation} from '@react-navigation/native';

export const useBaseNavigation = () => useNavigation<BaseNavigatorProp>();
