import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureMarketplaceorderingAgreements implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Marketplaceordering Agreements',
                name: 'N8nDevAzureMarketplaceorderingAgreements',
                icon: { light: 'file:./azure-marketplaceordering-agreements.png', dark: 'file:./azure-marketplaceordering-agreements.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'REST API for MarketplaceOrdering agreements.',
                defaults: { name: 'Azure Marketplaceordering Agreements' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMarketplaceorderingAgreementsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
