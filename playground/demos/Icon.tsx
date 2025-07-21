import { JSX } from "react";
import * as C from "../../src/index";
import {
  CircleIcon,
  CheckCircleIcon,
  WarningCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  InfoIcon,
  MagnifyingGlassIcon,
  ArrowClockwiseIcon,
} from "@phosphor-icons/react";

export default function IconDemo(): JSX.Element {
  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Basic Usage */}
      <C.Box header={
        <C.Text as="h6">Basic Usage</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon phosphor={<CircleIcon />} />
          <C.Icon phosphor={<CheckCircleIcon />} />
          <C.Icon phosphor={<WarningCircleIcon />} />
          <C.Icon phosphor={<XCircleIcon />} />
        </C.Stack>
      </C.Box>

      {/* Sizes */}
      <C.Box header={
        <C.Text as="h4">Sizes</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon forceSize={16} phosphor={<CheckCircleIcon />} />
          <C.Icon forceSize={24} phosphor={<CheckCircleIcon />} />
          <C.Icon forceSize={32} phosphor={<CheckCircleIcon />} />
          <C.Icon forceSize={48} phosphor={<CheckCircleIcon />} />
        </C.Stack>
      </C.Box>

      {/* Colors */}
      <C.Box header={
        <C.Text as="h4">Colors</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon forceColor="text" phosphor={<CheckCircleIcon />} />
          <C.Icon forceColor="blue" phosphor={<CheckCircleIcon />} />
          <C.Icon forceColor="purple" phosphor={<CheckCircleIcon />} />
          <C.Icon forceColor="orange" phosphor={<CheckCircleIcon />} />
        </C.Stack>
      </C.Box>

      {/* Inline Usage */}
      <C.Box header={
        <C.Text as="h4">Inline Usage</C.Text>
      }>
        <C.Stack>
          <C.Text>
            Text with <C.Icon inline="smaller" phosphor={<CheckCircleIcon />} /> icon
          </C.Text>
          <C.Text>
            <C.Icon inline="small" phosphor={<ArrowRightIcon />} /> Icon with margin
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* System Icons */}
      <C.Box header={
        <C.Text as="h4">System Icons</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon phosphor={<ArrowRightIcon />} />
          <C.Icon phosphor={<InfoIcon />} />
          <C.Icon phosphor={<MagnifyingGlassIcon />} />
          <C.Icon phosphor={<ArrowClockwiseIcon />} />
        </C.Stack>
      </C.Box>

      {/* Combinations */}
      <C.Box header={
        <C.Text as="h4">Combinations</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon 
            forceColor="blue" 
            forceSize={32} 
            phosphor={<CheckCircleIcon />} 
          />
          <C.Icon 
            forceColor="orange" 
            forceSize={32} 
            phosphor={<WarningCircleIcon />} 
          />
          <C.Icon 
            forceColor="red" 
            forceSize={32} 
            phosphor={<XCircleIcon />} 
          />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 