import { JSX } from "react";

import * as C from "../../src/index";
import { ExitIcon, InfoCircledIcon } from "../../src/icons";

export default function DrawerDemo(): JSX.Element {
  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Basic Usage */}
      <C.Box header={
        <C.Text as="h4">Basic Usage</C.Text>
      }>
        <C.Stack>
          <C.Drawer
            title="Basic Drawer"
            trigger={<C.Button>Open Drawer</C.Button>}
          >
            <C.Text>This is a basic drawer with default width.</C.Text>
          </C.Drawer>
          <C.Drawer
            small
            title="Small Drawer"
            trigger={<C.Button theme="minimal">Small Drawer</C.Button>}
          >
            <C.Text>This drawer uses the small variant.</C.Text>
          </C.Drawer>
        </C.Stack>
      </C.Box>

      {/* Custom Triggers */}
      <C.Box header={
        <C.Text as="h4">Custom Triggers</C.Text>
      }>
        <C.Stack>
          <C.Drawer
            title="Icon Trigger"
            trigger={
              <C.Button 
                icon={<C.Icon radix={<ExitIcon />} />}
                small
                theme="minimal"
              />
            }
          >
            <C.Text>Triggered by an icon button.</C.Text>
          </C.Drawer>
          <C.Drawer
            title="Text Trigger"
            trigger={<C.Text>Click this text</C.Text>}
          >
            <C.Text>Triggered by custom text element.</C.Text>
          </C.Drawer>
        </C.Stack>
      </C.Box>

      {/* Rich Content */}
      <C.Box header={
        <C.Text as="h4">Rich Content</C.Text>
      }>
        <C.Stack>
          <C.Drawer
            title="Form Example"
            trigger={<C.Button theme="solid">Open Form</C.Button>}
          >
            <C.Stack>
              <C.Input name="name" placeholder="Enter name" />
              <C.Input name="email" placeholder="Enter email" />
              <C.Stack direction="row">
                <C.Button theme="minimal">Cancel</C.Button>
                <C.Button theme="solid">Submit</C.Button>
              </C.Stack>
            </C.Stack>
          </C.Drawer>
        </C.Stack>
      </C.Box>

      {/* Forced Height */}
      <C.Box header={
        <C.Text as="h4">Forced Height</C.Text>
      }>
        <C.Stack>
          <C.Drawer
            forceHeight={70}
            title="Scrollable Content"
            trigger={<C.Button>Long Content</C.Button>}
          >
            <C.Stack>
              <C.Text>This content is forced to a specific height and will scroll.</C.Text>
              <C.Text>Additional content that demonstrates the scrolling behavior when the drawer height is constrained.</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
            </C.Stack>
          </C.Drawer>
        </C.Stack>
      </C.Box>

      {/* Disabled State */}
      <C.Box header={
        <C.Text as="h4">Disabled State</C.Text>
      }>
        <C.Stack>
          <C.Drawer
            disabled
            title="Disabled Drawer"
            trigger={<C.Button disabled>Can't Open</C.Button>}
          >
            <C.Text>This content won't be shown.</C.Text>
          </C.Drawer>
        </C.Stack>
      </C.Box>

      {/* Advanced Example */}
      <C.Box header={
        <C.Text as="h4">Advanced Example</C.Text>
      }>
        <C.Stack>
          <C.Drawer
            small
            title="Settings Panel"
            trigger={
              <C.Button 
                icon={<C.Icon radix={<InfoCircledIcon />} />}
                theme="solid"
              >
                Settings
              </C.Button>
            }
          >
            <C.Stack>
              <C.Text>Configuration options:</C.Text>
              <C.Button block theme="minimal">Option 1</C.Button>
              <C.Button block theme="minimal">Option 2</C.Button>
            </C.Stack>
          </C.Drawer>
        </C.Stack>
      </C.Box>

      {/* Close from Inside */}
      <C.Box header={
        <C.Text as="h4">Close from Inside</C.Text>
      }>
        <C.Stack>
          <C.Drawer
            title="Close from Inside Demo"
            trigger={<C.Button theme="solid">Open Demo</C.Button>}
          >
            {(close) => (
              <C.Stack>
                <C.Text>This drawer demonstrates closing from buttons inside the content.</C.Text>
                <C.Stack direction="row" gap="small">
                  <C.Button 
                    theme="minimal" 
                    onClick={() => {
                      console.log("Cancel button clicked");
                      close(); // This will close the drawer
                    }}
                  >
                    Cancel
                  </C.Button>
                  <C.Button 
                    theme="solid"
                    onClick={() => {
                      console.log("Save button clicked");
                      // Do some action first, then close
                      close(); // This will close the drawer
                    }}
                  >
                    Save
                  </C.Button>
                </C.Stack>
              </C.Stack>
            )}
          </C.Drawer>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 