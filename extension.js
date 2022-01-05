const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('convert-selection.surround', function () {

    const editor = vscode.window.activeTextEditor;
    const selections = editor.selections;
    const newSelections = [];
    
    for (const selection of selections) {
      const newSelection1 = new vscode.Selection(selection.start, selection.start);
      const newSelection2 = new vscode.Selection(selection.end, selection.end);
      newSelections.push(newSelection1, newSelection2);
    }

	  editor.selections = newSelections;
	});

	context.subscriptions.push(disposable);
}

exports.activate = activate;