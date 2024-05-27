import React from 'react';
import { Fragment } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ArgTypes, Args, Meta, StoryFn } from '@storybook/react/*';
import { Modal } from '../Modal';
import cn from '../../cn';
import { EnvelopeClosedIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';


export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    show: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['lg', 'md', 'sm', 'xs'] },
    },
    title: { control: 'text' },
    children: { control: 'text' },
  } as Partial<ArgTypes<Args>>,
} as Meta;
export const Template: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}>
     <Transition show={args.show} as={Fragment}>
      <Dialog open={args.show}      
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => args.onClose?.()}

      >
        <div className="flex min-h-screen items-center justify-center p-4 text-center sm:block sm:p-0">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPanel className="fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-gray-900/80" />
          </TransitionChild>
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          />
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={cn(
                { 'sm:max-w-5xl': args.size === 'lg' },
                { 'sm:max-w-3xl': args.size === 'md' },
                { 'sm:max-w-lg': args.size === 'sm' },
                { 'sm:max-w-sm': args.size === 'xs' },
                'inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl'
              )}
            >
              <div className="flex items-center justify-between">
                <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                  {args.icon && args.icon}
                  {args.title}
                </DialogTitle>
                <button
                  type="button"
                  className="p-2 -m-2 text-gray-400 bg-white rounded-full dark:text-gray-300 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={args.onClose}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-2">
                {args.children}
              </div>
            </div>
           
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
</Modal>;

export const Default = Template.bind({});
Default.args = {
  show: true,
  size: 'sm',
  title: 'Modal Title',
  children: <div>Modal Content</div>,
  onClose: () => alert('Closed'),
};



export const NoTitle = Template.bind({});
NoTitle.args = {
  show: true,
  size: 'sm',
  children: <div>Modal Content without title</div>,
  onClose: () => alert('Closed'),
};


export const WithIcon: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
WithIcon.args = {
  show: false,
  icon: <EnvelopeClosedIcon className="h-5 w-5" />,
  title: 'Modal with Icon',
  children: <div className='p-3'>This modal includes an icon in its title.</div>,
  onClose: () => console.log('Modal closed'),
};
export const DynamicContent: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
DynamicContent.args = {
  show: false,
  title: 'Dynamic Content Modal',
  children: <div className='p-3'>{new Array(5).fill(null).map((_, i) => <p key={i}>Item {i + 1}</p>)}</div>,
  onClose: () => console.log('Modal closed'),
};
export const AccessibilityTest: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
AccessibilityTest.args = {
  show: false,
  title: 'Accessibility Test Modal',
  children: <div className='p-3'>Test the accessibility features of the modal.</div>,
  onClose: () => console.log('Modal closed'),
};
AccessibilityTest.parameters = {
  a11y: {
    config: {
      rules: [{ id: 'dialog-role', enabled: true }]
    }
  }
};
export const NestedModal: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
NestedModal.args = {
  show: false,
  title: 'Nested Modal',
  onClose: () => console.log('Modal closed'),
  children: (
    <>
      <p className='p-3'>Main modal content</p>
      <Modal title="Inner Modal" show={true}>
        <p className='p-3 h-80 w-80'>Content of the inner modal</p>
      </Modal>
    </>
  ),
};
export const FormModal: StoryFn<React.ComponentProps<typeof Modal>> = (args) => <Modal   {...args}/>
FormModal.args = {
  show: false,
  onClose: () => console.log('Modal closed'),
  title: 'Form Modal',
  children: (
    <form className='p-3 ' onSubmit={(e) => {
      e.preventDefault();
      alert('Form submitted');
    }}>
      <input className='p-3 ' type="text" placeholder="Type here..." required />
      <button  className='p-3 ' type="submit">Submit</button>
    </form>
  ),
};