export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd6bf855485e04984f2e5c5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x1ss545u',
                  apiId: 'f46c5b83-39f3-45d2-968b-4307592ee363'
                },
                {
                  buildHookId: '5dd6bf85958bbb2c82b73d98',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2nmv9hgv',
                  apiId: 'f9964dc9-8ee4-408b-b3ee-0e07bc85774a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gushinyakov/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2nmv9hgv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
