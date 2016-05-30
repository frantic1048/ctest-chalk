===========
ctest-chalk
===========

Colorize CTest log in terminal.

Screenshot:

.. image :: http://i.imgur.com/2Lss384.png

===========
Install
===========

.. code :: bash

  npm install -g frantic1048/ctest-chalk

===========
Usage
===========

.. code :: bash

  # Just pipe ctest output to ctest-chalk.
  ctest | ctest-chalk

  # Or you can specify a ctest log to view
  ctest > test.log && ctest-chalk test.log

===========
Deficiency
===========

Since very simple implementation, ``ctest-chalk`` won't print result until ``ctest`` is finished.
