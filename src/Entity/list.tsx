import React from "react";
import {
    useDataGrid,
    EditButton,
    ShowButton,
    DeleteButton,
    List,
    DateField,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IResourceComponentsProps } from "@refinedev/core";

export const EntityList: React.FC<IResourceComponentsProps> = () => {
    const { dataGridProps } = useDataGrid();

    const columns = React.useMemo<GridColDef[]>(
        () => [
            {
                field: "txo_id",
                flex: 1,
                headerName: "Txo",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "entity_type",
                flex: 1,
                headerName: "Entity Type",
                minWidth: 200,
            },
            {
                field: "entity_name",
                flex: 1,
                headerName: "Entity Name",
                minWidth: 200,
            },
            {
                field: "gs1_mapping",
                flex: 1,
                headerName: "Gs1 Mapping",
                minWidth: 200,
            },
            {
                field: "id",
                headerName: "Id",
                type: "number",
                minWidth: 50,
            },
            {
                field: "owning_gln",
                flex: 1,
                headerName: "Owning Gln",
                type: "number",
                minWidth: 200,
            },
            {
                field: "contains_entities",
                flex: 1,
                headerName: "Contains Entities",
                minWidth: 200,
            },
            {
                field: "lat",
                flex: 1,
                headerName: "Lat",
                type: "number",
                minWidth: 200,
            },
            {
                field: "lng",
                flex: 1,
                headerName: "Lng",
                type: "number",
                minWidth: 200,
            },
            {
                field: "entity_status",
                flex: 1,
                headerName: "Entity Status",
                minWidth: 200,
            },
            {
                field: "valid_from",
                flex: 1,
                headerName: "Valid From",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "actions",
                headerName: "Actions",
                sortable: false,
                renderCell: function render({ row }) {
                    return (
                        <>
                            <EditButton hideText recordItemId={row.id} />
                            <ShowButton hideText recordItemId={row.id} />
                        </>
                    );
                },
                align: "center",
                headerAlign: "center",
                minWidth: 80,
            },
        ],
        [],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
