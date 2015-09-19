# Designing Plugins and Modules for That Change the World. One Minecraft Event at a Time.

This directory contains the following subdirectories...

 * modules - these modules are loaded into custom plugins using the `require()` function.
 * plugins - contains ScriptCraft's bundled plugins as well as custom plugings. Note: modules which are automatically loaded and globally-namespaced at startup)

At some point I will add an index here of all the custom plugins and modules needed for those.

Below are the relavant ScriptCraft readme notes...

If you are a minecraft modder who wants to develop simple mods then the `plugins` location is where you should probably place your .js files. 

If you are a minecraft modder who wants to develop more complex mods or provide an API for other modders, then modules intended for use by plugins (your own or others) should probably be placed in the `modules` directory.

The `lib` directory is reserved for use by ScriptCraft. If a module is considered essential for all, or adds significantly useful new functionality to ScriptCraft then it should be placed in the `lib` directory.
