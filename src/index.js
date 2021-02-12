import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
// This SVG file import will be handled by webpack's raw-text loader.
// This means that testLogo will hold the source SVG.
import testLogo from './../assets/test-logo.svg';

export default class testPluginWidget extends Plugin {
    init() {
        const editor = this.editor || window.editor;

        editor.ui.componentFactory.add('testPluginWidget', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'Test Plugin',
                icon: testLogo,
                tooltip: true
            });

            // Callback executed once the image is clicked.
            view.on('execute', () => {
                const modal = document.querySelector('.ik-media-library-widget-modal');
                modal.style.display = "block";
            });

            return view;
        });
    }
}
