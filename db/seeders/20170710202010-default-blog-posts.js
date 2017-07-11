'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BlogPosts', [
      {
        title: 'My First Blog Post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis sagittis purus pellentesque commodo. Duis egestas justo vitae augue congue pharetra. Mauris pulvinar tincidunt condimentum. Vivamus ultricies tortor ut ligula scelerisque sodales. Donec magna erat, mollis vel neque at, molestie vestibulum metus. In vitae lectus non nisl vulputate malesuada eget sed augue. Nam tempor eros non metus malesuada sollicitudin. In porta diam tellus. Pellentesque sagittis ex eu veli laoreet efficitur. Vestibulum viverra, tellus sed ornare aliquet, orci metus elementum sem, vitae lacinia lorem felis eu tellus. Aenean interdum aliquet nisl, sed mattis risus consectetur ac. Sed ac sollicitudin leo. Donec laoreet ex in rutrum imperdiet. Suspendisse potenti. Vivamus eu nisl vitae augue vestibulum efficitur eget at magna. Curabitur fermentum orci eleifend, rhoncus dui sed, fringilla neque. Cras sodales nunc id aliquet viverra. Etiam mollis ante vel odio rutrum accumsan.',
        description: 'Lorem ipsum dolor sit amet.',
        status: 'published',
        slug: 'my-first-blog-post',
        isActive: true,
        createdAt: '2017-07-11T16:00:00.000Z',
        updatedAt: '2017-07-11T16:00:00.000Z'
      },
      {
        title: 'A Second Blog Post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis sagittis purus pellentesque commodo. Duis egestas justo vitae augue congue pharetra. Mauris pulvinar tincidunt condimentum. Vivamus ultricies tortor ut ligula scelerisque sodales. Donec magna erat, mollis vel neque at, molestie vestibulum metus. In vitae lectus non nisl vulputate malesuada eget sed augue. Nam tempor eros non metus malesuada sollicitudin. In porta diam tellus. Pellentesque sagittis ex eu veli laoreet efficitur. Vestibulum viverra, tellus sed ornare aliquet, orci metus elementum sem, vitae lacinia lorem felis eu tellus. Aenean interdum aliquet nisl, sed mattis risus consectetur ac. Sed ac sollicitudin leo. Donec laoreet ex in rutrum imperdiet. Suspendisse potenti. Vivamus eu nisl vitae augue vestibulum efficitur eget at magna. Curabitur fermentum orci eleifend, rhoncus dui sed, fringilla neque. Cras sodales nunc id aliquet viverra. Etiam mollis ante vel odio rutrum accumsan.',
        description: 'Vestibulum viverra, tellus sed ornare aliquet.',
        status: 'published',
        slug: 'a-second-blog-post',
        isActive: true,
        createdAt: '2017-07-03T16:00:00.000Z',
        updatedAt: '2017-07-04T16:00:00.000Z'
      },
      {
        title: 'Yet Another Blog Post Three',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis sagittis purus pellentesque commodo. Duis egestas justo vitae augue congue pharetra. Mauris pulvinar tincidunt condimentum. Vivamus ultricies tortor ut ligula scelerisque sodales. Donec magna erat, mollis vel neque at, molestie vestibulum metus. In vitae lectus non nisl vulputate malesuada eget sed augue. Nam tempor eros non metus malesuada sollicitudin. In porta diam tellus. Pellentesque sagittis ex eu veli laoreet efficitur. Vestibulum viverra, tellus sed ornare aliquet, orci metus elementum sem, vitae lacinia lorem felis eu tellus. Aenean interdum aliquet nisl, sed mattis risus consectetur ac. Sed ac sollicitudin leo. Donec laoreet ex in rutrum imperdiet. Suspendisse potenti. Vivamus eu nisl vitae augue vestibulum efficitur eget at magna. Curabitur fermentum orci eleifend, rhoncus dui sed, fringilla neque. Cras sodales nunc id aliquet viverra. Etiam mollis ante vel odio rutrum accumsan.',
        description: 'Nam lobortis sagittis purus pellentesque commodo.',
        status: 'published',
        slug: 'yet-another-blog-post-three',
        isActive: true,
        createdAt: '2017-07-12T16:00:00.000Z',
        updatedAt: '2017-07-12T16:00:00.000Z'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BlogPost', null, {});
  }
};
