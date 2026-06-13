import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMarketplaceorderingAgreementsApi implements ICredentialType {
        name = 'N8nDevAzureMarketplaceorderingAgreementsApi';

        displayName = 'Azure Marketplaceordering Agreements API';

        icon: Icon = { light: 'file:../nodes/AzureMarketplaceorderingAgreements/azure-marketplaceordering-agreements.png', dark: 'file:../nodes/AzureMarketplaceorderingAgreements/azure-marketplaceordering-agreements.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Marketplaceordering Agreements API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
