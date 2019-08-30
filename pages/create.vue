<template>
  <div>
    <h1 class="headline">
      Create Blogpost
    </h1>
    <t-form-factory
      id="blogpost-form-create"
      :schema="formSchema"
      :model="formData"
      @submit="handleSubmit"
    >
      <template slot="footer">
        <v-btn
          :loading="isLoading"
          form="blogpost-form-create"
          color="primary"
          type="submit"
        >
          Create
        </v-btn>
      </template>
    </t-form-factory>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { CreateBlogPostRequest } from '~/lib/blog/types'
import BlogService from '~/lib/blog/BlogService'
import { UUIDResponse } from '~/lib/rest/types'
import TFormFactory from '~/components/form/factory/TFormFactory.vue'
import FormSchema from '~/lib/forms/factory/schema/FormSchema'
import { IsRequired, MaxLength, MinLength, NotBlank } from '~/lib/forms/rules'

@Component({
  components: {
    TFormFactory
  }
})
export default class CreatePage extends Vue {
  private formData: CreateBlogPostRequest = {
    title: '',
    content: ''
  }
  readonly formSchema: FormSchema = [
    {
      name: 'title',
      type: 'text',
      icon: 'mdi-format-title',
      rules: [IsRequired(), MinLength(2), MaxLength(32), NotBlank()]
    },
    {
      name: 'content',
      type: 'textarea',
      icon: 'mdi-text',
      rules: [IsRequired(), MinLength(2), MaxLength(1024), NotBlank()]
    }
  ]

  get isLoading(): boolean {
    return this.$wait.is('blogpost-create-form-wait')
  }

  handleSubmit() {
    this.$wait.start('blogpost-create-form-wait')
    this.$service
      .get<BlogService>('blog')
      .create(this.formData)
      .then((uuidResponse: UUIDResponse) => {
        alert('Created blogpost: ' + uuidResponse.id)
        this.$wait.end('blogpost-create-form-wait')
      })
  }
}
</script>
