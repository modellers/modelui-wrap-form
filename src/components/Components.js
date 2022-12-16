
// Managers and factories
import { layout } from 'modelui-core-runtime';

// Components
import { registerForm } from './Form';

export default function registerComponents(component_manager) {

    if (!component_manager) {
        component_manager = layout.Manager.ComponentManager.getInstance();
    }
    /*
    if (component_manager.constructor.name !== 'ComponentManager') {
        throw `Constructor must be component manager. Got type ${component_manager.constructor.name}`;
    }
    */
    registerForm(component_manager);

}