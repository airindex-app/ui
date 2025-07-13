import { fadeIn, styled } from "../../stitches.config";

// Shared patterns
const cellPaddingBase = {
  "&:first-child": {
    paddingLeft: "$medium",
  },
  "&:last-child": {
    paddingRight: "$medium",
  },
};

const alignVariants = {
  center: { textAlign: "center" },
  left: { textAlign: "left" },
  right: { textAlign: "right" },
} as const;

const rowHoverBase = {
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  "&:last-child": {
    borderBottom: "none",
  },
  borderBottom: "1px solid $borderLight",
  transition: "$default",
};

export const TableStitches = styled("div", {
  backgroundColor: "$background",
  border: "1px solid $border",
  overflow: "hidden",
  phone: {
    backgroundColor: "transparent",
    border: "none",
    borderRadius: 0,
    overflow: "visible",
  },
  position: "relative",
  width: "100%",
});

export const TableCoreStitches = styled("table", {
  borderCollapse: "separate",
  borderSpacing: 0,
  fontSize: "$default",
  phone: {
    display: "none",
  },
  tableLayout: "fixed",
  width: "100%",
});

export const TableMobileView = styled("div", {
  display: "none",
  phone: {
    display: "flex",
    flexDirection: "column",
    gap: "$small",
  },
});

export const TableRowStitches = styled("tr", {
  ...rowHoverBase,
  "tbody &": {
    "&:hover": {
      backgroundColor: "$surfaceHover",
    },
  },
});

export const TableMobileRow = styled("div", {
  "&:not(:last-child)": {
    borderBottom: "1px solid $borderLight",
    marginBottom: "$smaller",
    paddingBottom: "$smaller",
  },
  alignItems: "flex-start",
  display: "flex",
  gap: "$small",
  justifyContent: "space-between",
  padding: "$smaller 0",
  variants: {
    isActions: {
      true: {
        alignItems: "center",
        borderBottom: "none",
        justifyContent: "flex-end",
        marginBottom: 0,
        marginTop: "$small",
        paddingBottom: 0,
        paddingTop: "$small",
      },
    },
  },
});

export const TableMobileLabel = styled("span", {
  color: "$text",
  fontSize: "$small",
  fontWeight: 500,
  minWidth: "50px",
  opacity: "$light",
});

export const TableMobileValue = styled("div", {
  alignItems: "center",
  color: "$text",
  display: "flex",
  flex: 1,
  fontSize: "$default",
  gap: "$smaller",
  justifyContent: "flex-end",
  textAlign: "right",
  variants: {
    isActions: {
      true: {
        flex: "0 0 auto",
        justifyContent: "flex-end",
      },
    },
  },
});

export const TableCellStitches = styled("td", {
  ...cellPaddingBase,
  color: "$text",
  fontSize: "$default",
  fontWeight: 400,
  lineHeight: 1.4,
  padding: "$small $medium",
  variants: {
    align: alignVariants,
    isAction: {
      true: {
        textAlign: "right",
        width: "auto",
      },
    },
    isFullWidth: {
      true: {
        textAlign: "center",
      },
    },
  },
  verticalAlign: "middle",
});

export const TableHeaderCellStitches = styled("th", {
  ...cellPaddingBase,
  "&:first-child": {
    ...cellPaddingBase["&:first-child"],
    borderTopLeftRadius: "$medium",
  },
  "&:last-child": {
    ...cellPaddingBase["&:last-child"],
    borderTopRightRadius: "$medium",
  },
  "& > div": {
    alignItems: "center",
    display: "inline-flex",
    gap: "$smaller",
  },
  backgroundColor: "$background",
  borderBottom: "1px solid $borderLight",
  color: "$text",
  fontSize: "$small",
  fontWeight: 500,
  padding: "$small $medium",
  textAlign: "left",
  variants: {
    align: alignVariants,
  },
  verticalAlign: "middle",
});

export const AnimatedTableRow = styled(TableRowStitches, {
  animation: `${fadeIn} 200ms ease-in-out`,
});

export const TablePaginationBlock = styled("div", {
  alignItems: "center",
  backgroundColor: "$background",
  borderBottomLeftRadius: "$medium",
  borderBottomRightRadius: "$medium",
  borderTop: "1px solid $borderLight",
  display: "flex",
  gap: "$medium",
  justifyContent: "space-between",
  padding: "$small $medium",
  phone: {
    alignItems: "stretch",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: 0,
    flexDirection: "column",
    gap: "$small",
    marginTop: "$medium",
    padding: "$medium 0",
  },
  width: "100%",
});

export const TableCellBlock = styled("div", {
  alignItems: "center",
  display: "flex",
  gap: "$smaller",
  minHeight: "25px",
  width: "100%",
});

export const TableEmptyStateCell = styled("td", {
  padding: "40px 0",
  textAlign: "center",
});

export const TableSubRowStitches = styled("tr", {
  ...rowHoverBase,
  backgroundColor: "$surfaceLight",
});

export const TableSubCellStitches = styled("td", {
  ...cellPaddingBase,
  backgroundColor: "transparent",
  color: "$text",
  fontSize: "$small",
  fontWeight: 400,
  padding: "$smaller $medium",
  variants: {
    align: alignVariants,
    isAction: {
      true: {
        textAlign: "right",
        width: "auto",
      },
    },
    isFullWidth: {
      true: {
        textAlign: "center",
      },
    },
  },
  verticalAlign: "middle",
});

export default TableStitches;
