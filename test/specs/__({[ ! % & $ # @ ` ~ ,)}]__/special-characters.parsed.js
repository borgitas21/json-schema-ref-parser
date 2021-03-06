(function () {
  'use strict';

  helper.parsed.specialCharacters =
    {
      schema: {
        definitions: {
          $ref: '__(%7B%5B%20!%20%25%20%26%20%24%20%23%20%40%20%60%20~%20%2C)%7D%5D__/__(%7B%5B%20!%20%25%20%26%20%24%20%23%20%40%20%60%20~%20%2C)%7D%5D__.json'
        }
      },

      file: {
        type: 'object',
        description: 'Testing file/folder names with spaces and special characters'
      }
    };

}());
