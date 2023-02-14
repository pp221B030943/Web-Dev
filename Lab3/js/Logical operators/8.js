if (-1 || 0) alert( 'first' ); // run -> -1
if (-1 && 0) alert( 'second' ); // does not run because -> 0
if (null || -1 && 1) alert( 'third' ); // run -> 1