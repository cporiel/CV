/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export function getClosureSafeProperty(objWithPropertyToExtract) {
    for (var key in objWithPropertyToExtract) {
        if (objWithPropertyToExtract[key] === getClosureSafeProperty) {
            return key;
        }
    }
    throw Error('Could not find renamed property on target object.');
}
/**
 * Sets properties on a target object from a source object, but only if
 * the property doesn't already exist on the target object.
 * @param target The target to set properties on
 * @param source The source of the property keys and values to set
 */
export function fillProperties(target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy91dGlsL3Byb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE1BQU0sVUFBVSxzQkFBc0IsQ0FBSSx3QkFBMkI7SUFDbkUsS0FBSyxJQUFJLEdBQUcsSUFBSSx3QkFBd0IsRUFBRTtRQUN4QyxJQUFJLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxLQUFLLHNCQUE2QixFQUFFO1lBQ25FLE9BQU8sR0FBRyxDQUFDO1NBQ1o7S0FDRjtJQUNELE1BQU0sS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7QUFDbkUsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUErQixFQUFFLE1BQStCO0lBQzdGLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1FBQ3hCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsb3N1cmVTYWZlUHJvcGVydHk8VD4ob2JqV2l0aFByb3BlcnR5VG9FeHRyYWN0OiBUKTogc3RyaW5nIHtcbiAgZm9yIChsZXQga2V5IGluIG9ialdpdGhQcm9wZXJ0eVRvRXh0cmFjdCkge1xuICAgIGlmIChvYmpXaXRoUHJvcGVydHlUb0V4dHJhY3Rba2V5XSA9PT0gZ2V0Q2xvc3VyZVNhZmVQcm9wZXJ0eSBhcyBhbnkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHRocm93IEVycm9yKCdDb3VsZCBub3QgZmluZCByZW5hbWVkIHByb3BlcnR5IG9uIHRhcmdldCBvYmplY3QuJyk7XG59XG5cbi8qKlxuICogU2V0cyBwcm9wZXJ0aWVzIG9uIGEgdGFyZ2V0IG9iamVjdCBmcm9tIGEgc291cmNlIG9iamVjdCwgYnV0IG9ubHkgaWZcbiAqIHRoZSBwcm9wZXJ0eSBkb2Vzbid0IGFscmVhZHkgZXhpc3Qgb24gdGhlIHRhcmdldCBvYmplY3QuXG4gKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgdG8gc2V0IHByb3BlcnRpZXMgb25cbiAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgcHJvcGVydHkga2V5cyBhbmQgdmFsdWVzIHRvIHNldFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsbFByb3BlcnRpZXModGFyZ2V0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSwgc291cmNlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxufVxuIl19