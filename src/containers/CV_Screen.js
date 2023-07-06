import React from 'react';
import CV_Content from '../components/index';
import { RichTextEditorComponent, Toolbar, Link, Image, Table, QuickToolbarSettingsModel,
    HtmlEditor, Inject, QuickToolbar  } from '@syncfusion/ej2-react-richtexteditor';


const inlineQuickToolbar : QuickToolbarSettingsModel  = {
    image : [
    'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
    'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension']
};

const customToolbarSettings  = {
    items : [
    'Bold', 'Italic', 'Underline', 'StrikeThrough', 'ClearAll', 
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|', 'CreateTable',
    'CreateLink', 'Image', 'Replace', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo', '|', 'Preview', 'InsertCode' ],
    type: 'Scrollable',
    enableFloating: false
};

export default function CV_Screen () {
  return (
        <RichTextEditorComponent toolbarSettings={customToolbarSettings} 
        floatingToolbarOffset={0} quickToolbarSettings={inlineQuickToolbar}>
            <Inject services = {[Toolbar, Link, Image, HtmlEditor, Table, QuickToolbar]}></Inject>   
            <CV_Content />
        </RichTextEditorComponent>
    );
}




 
 
